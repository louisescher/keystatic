'use client';

import { useState } from 'react';

import Dialog from './dialog';
import Button from './button';
import SendMessageForm from './forms/send-message';
import { GithubIcon } from './icons/github-icon';

export default function CallToAction() {
  const [isOpen, setIsOpen] = useState(false);

  const linkLabels = {
    tmLabs: 'Thinkmill Labs',
    ksDiscussions: 'Join the discussion on GitHub',
  };

  return (
    <section className="relative grid overflow-hidden bg-sand-2">
      {/* Background svg */}
      <svg
        className="absolute left-0 top-0 z-0 min-h-full"
        width="756"
        height="637"
        viewBox="0 0 756 637"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1434_10414)">
          <path
            d="M-80 -360L997 717"
            stroke="url(#paint0_linear_1434_10414)"
            strokeWidth="226"
            strokeLinejoin="round"
          />
          <path
            d="M-91.9999 -54.0001L181 219L499 219L997 717"
            stroke="url(#paint1_linear_1434_10414)"
            strokeWidth="226"
          />
          <path
            opacity="0.4"
            d="M-80 -360L997 717.001"
            stroke="url(#paint2_linear_1434_10414)"
            strokeWidth="224"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1434_10414"
            x1="-1.04043e+11"
            y1="1.04043e+11"
            x2="-1.04043e+11"
            y2="1.04043e+11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7F9FB" />
            <stop offset="1" stopColor="#FEEEF8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1434_10414"
            x1="167.812"
            y1="205.973"
            x2="636.388"
            y2="674.549"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFFBD1" />
            <stop offset="1" stopColor="#F5F2FF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1434_10414"
            x1="189.917"
            y1="-89.7194"
            x2="538.438"
            y2="258.801"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E7F9FB" />
            <stop offset="1" stopColor="#FEEEF8" />
          </linearGradient>
          <clipPath id="clip0_1434_10414">
            <rect width="756" height="637" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="relative px-6 py-16 sm:max-w-lg sm:pl-3">
        <div className="flex flex-col gap-6 px-8 lg:px-16">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Tell us what you think</h4>
            <p className="text-sm text-sand-11">
              We're building Keystatic in the open as part of{' '}
              <a
                href="https://www.thinkmill.com.au/"
                target="_blank"
                className="cursor-pointer underline hover:text-thinkmill-red"
                aria-label={`${linkLabels.tmLabs} (Opens in new tab)`}
              >
                {linkLabels.tmLabs}
              </a>{' '}
              Research &amp; Development. Feedback on how we're going, what
              you're looking for, and what you'd like to see next is super
              helpful as we progress!
            </p>
          </div>
          <ul className="list-none">
            <li>
              <a
                href="https://github.com/Thinkmill/keystatic/discussions"
                target="_blank"
                aria-label={`${linkLabels.ksDiscussions} (Opens in new tab)`}
              >
                <span className="flex flex-row items-center gap-4 text-sm font-semibold">
                  <GithubIcon />
                  {linkLabels.ksDiscussions}
                </span>
              </a>
            </li>
            <li>
              <button onClick={() => setIsOpen(true)}>Send us a message</button>
            </li>
          </ul>
          {/* OLD */}
          <Button
            className="self-start"
            href="https://github.com/Thinkmill/keystatic/discussions"
            target="_blank"
            aria-label={`${linkLabels.ksDiscussions} (Opens in new tab)`}
          >
            {linkLabels.ksDiscussions}
          </Button>
          <Button
            className="mt-3 w-auto"
            impact="light"
            onClick={() => setIsOpen(true)}
          >
            Send us a message
          </Button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        header={() => (
          <>
            <h2 className="pr-8 text-3xl font-bold sm:text-4xl sm:leading-tight">
              Send us a message
            </h2>
            <p className="mt-4 text-slate-11">Tell us what you think below.</p>
          </>
        )}
      >
        <div className="mt-6">
          <h3 className="text-2xl font-bold leading-7">
            Tell us a bit about yourself
          </h3>
          <SendMessageForm />
        </div>
      </Dialog>
    </section>
  );
}
