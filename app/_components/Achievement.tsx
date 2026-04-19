'use client';
import SectionTitle from '@/components/SectionTitle';
import { ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ExternalLink } from 'lucide-react';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Achievement = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const slideUpEl =
                containerRef.current?.querySelectorAll('.slide-up');

            if (!slideUpEl?.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up', {
                opacity: 0,
                y: 40,
                ease: 'none',
                stagger: 0.4,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section id="my-achievements" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Achievements" />

                <div className="space-y-6">
                    {ACHIEVEMENTS.map((achievement) => (
                        <a
                            href={achievement.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={achievement.title}
                            className="slide-up group block p-6 border border-muted-foreground/20 rounded-lg hover:border-muted-foreground/40 transition-colors"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {achievement.issuer}
                                    </p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievement;
