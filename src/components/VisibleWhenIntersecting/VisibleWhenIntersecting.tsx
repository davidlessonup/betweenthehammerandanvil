import { useRef, PropsWithChildren } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

export const VisibleWhenIntersecting: React.FC<PropsWithChildren> = ({
    children,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const entry = useIntersectionObserver(ref, {});

    const isVisible = !!entry?.isIntersecting;

    return <div ref={ref}>{ isVisible && children }</div>;
};
