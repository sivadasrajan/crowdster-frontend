import React from "react"
import { useState } from "react"


function TextInput({labelTitle,  type, defaultValue = '', placeholder, updateFormValue, updateType}){

    const [value, setValue] = useState(defaultValue)

    const updateInputValue = (val) => {
        setValue(val)
        updateFormValue({updateType, value : val})
    }

    return(
        <div className={`form-control w-full `}>
            <label className="label">
                <span className={"label-text text-base-content "}>{labelTitle}</span>
            </label>
            <input type={type || "text"} value={value} placeholder={placeholder || ""} onChange={(e) => updateInputValue(e.target.value)}className="text-xs text-primary font-light placeholder-gray-gray4 px-2 pt-1.5 w-full " />
        </div>
    )
}


export default TextInput