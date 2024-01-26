import React, { useState } from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import './style.css';

export const Phone: React.FC = () => {
    const [value, setValue] = useState<number | any>()
    return (
        <div className="wrapperphone">
            <PhoneInput
                international
                countryCallingCodeEditable={true}
                initialValueFormat="national"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
            />
        </div>
    )
}