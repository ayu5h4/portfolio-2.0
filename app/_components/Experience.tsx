'use client';
import SectionTitle from '@/components/SectionTitle';
import { EXPERIENCES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
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
        <section id="my-experience" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Experience" />

                <div className="space-y-12">
                    {EXPERIENCES.map((exp) => (
                        <div className="slide-up space-y-4" key={exp.company}>
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                    <h3 className="text-2xl font-bold">
                                        {exp.company}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.startDate} – {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-xl font-semibold text-muted-foreground">
                                    {exp.position}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {exp.location}
                                </p>
                            </div>

                            <ul className="space-y-2 ml-4">
                                {exp.achievements.map((achievement, idx) => (
                                    <li
                                        key={idx}
                                        className="text-base leading-relaxed list-disc text-foreground/80"
                                    >
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
