import { useEffect } from 'react';

const Blackout = props => {
    useEffect(() => {
        document.body.style.background = 'black';
        return () => {
            document.body.style.background = 'white';
        };
    }, []);

    return (
        <div style={{ background: 'black' }}>
            {props.children}
        </div>
    );
};

export default Blackout;