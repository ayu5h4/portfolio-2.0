'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), {
  ssr: false,
});

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
