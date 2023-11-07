import { useLayoutEffect, useState, PropsWithChildren } from 'react';
import { VisibleWhenIntersecting } from '@Components/VisibleWhenIntersecting/VisibleWhenIntersecting';

export interface DebouncedProps {
  ms: number;
}

export const Debounced: React.FC<PropsWithChildren<DebouncedProps>> = ({
    ms,
    children,
}) => {
    const [shouldRender, setShouldRender] = useState(false);

    useLayoutEffect(() => {
        const timeout = setTimeout(() => setShouldRender(true), ms);

        return () => {
            clearTimeout(timeout);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!shouldRender) {
        return null;
    }

    return children;
};

export const DebouncedIntersection: React.FC<
  PropsWithChildren<DebouncedProps>
> = (props) => (
    <VisibleWhenIntersecting>
        <Debounced {...props} />
    </VisibleWhenIntersecting>
);
