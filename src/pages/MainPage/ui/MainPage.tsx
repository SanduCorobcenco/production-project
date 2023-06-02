import React, { useState } from 'react';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            Main Page
        </div>
    );
};

export default MainPage;
