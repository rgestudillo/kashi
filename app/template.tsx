"use client";

import { useState, useEffect } from "react";
import {
  AnimationProps,
  DynamicAnimationOptions,
  useAnimate,
  motion,
} from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Adjust time as needed

    return () => clearTimeout(timer); // Clean up timer on component unmount
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-blue-950  z-50">
        <ShuffleLoader />
      </div>
    );
  }

  return (
    <motion.div
      className="flex items-center justify-center h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

const ShuffleLoader = () => {
  const NUM_BLOCKS = 5;
  const BLOCK_SIZE = 32;

  const DURATION_IN_MS = 175;
  const DURATION_IN_SECS = DURATION_IN_MS * 0.001;

  const TRANSITION: DynamicAnimationOptions = {
    ease: "easeInOut",
    duration: DURATION_IN_SECS,
  };

  const [blocks, setBlocks] = useState(
    Array.from(Array(NUM_BLOCKS).keys()).map((n) => ({ id: n }))
  );
  const [scope, animate] = useAnimate();

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = async () => {
    while (true) {
      const [first, second] = pickTwoRandom();

      await animateElements(first.id, second.id);

      setBlocks((prev) => {
        const copy = [...prev];
        const indexForFirst = copy.findIndex((b) => b.id === first.id);
        const indexForSecond = copy.findIndex((b) => b.id === second.id);
        [copy[indexForFirst], copy[indexForSecond]] = [
          copy[indexForSecond],
          copy[indexForFirst],
        ];
        return copy;
      });

      await delay(DURATION_IN_MS * 2);

      await animateElements(first.id, second.id, 0);
    }
  };

  const animateElements = async (
    firstId: number,
    secondId: number,
    y = -BLOCK_SIZE
  ) => {
    try {
      await animate(`[data-block-id="${firstId}"]`, { y }, TRANSITION);
      await animate(`[data-block-id="${secondId}"]`, { y: -y }, TRANSITION);
    } catch (e) {}
  };

  const pickTwoRandom = () => {
    const index1 = Math.floor(Math.random() * blocks.length);
    let index2 = Math.floor(Math.random() * blocks.length);

    while (index2 === index1) {
      index2 = Math.floor(Math.random() * blocks.length);
    }

    return [blocks[index1], blocks[index2]];
  };

  const delay = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div ref={scope} className="flex divide-x divide-neutral-950">
      {blocks.map((b) => (
        <motion.div
          layout
          data-block-id={b.id}
          key={b.id}
          transition={TRANSITION as AnimationProps["transition"]}
          style={{
            width: BLOCK_SIZE,
            height: BLOCK_SIZE,
          }}
          className="bg-white"
        />
      ))}
    </div>
  );
};
