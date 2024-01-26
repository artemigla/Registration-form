import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import './style.css';

export const Flags: React.FC = () => {
    const [selected, setSelected] = useState("");

    return (
        <div className='selectcountry'>
            <ReactFlagsSelect
                selected={selected}
                countries={["US", "GB", "FR", "DE", "IT"]}
                onSelect={(code) => setSelected(code)}
                placeholder="Select Country"
                searchable
                selectedSize={18}
                optionsSize={18}
                searchPlaceholder="Search countries"
            />
        </div>
    )
}