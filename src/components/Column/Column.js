import React from 'react';

const Column = ([children]) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {children}
        </div>
    );
};

export default Column;