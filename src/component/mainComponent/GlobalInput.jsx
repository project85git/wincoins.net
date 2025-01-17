const GlobalInput = ({bgColor,textColor,textSize,padding,borderRadius, type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{fontSize:textSize,backgroundColor:bgColor,color:textColor,padding:padding,borderRadius:borderRadius}}
        className="w-full    outline-none "
      />
    );
  };
  

  export default GlobalInput;