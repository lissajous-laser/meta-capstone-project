import Select from "react-select";
import "../../styles/atoms/OccasionSelect.css";

export function OccasionSelect({id, options, value, setValue}) {
  const onChangeHandler = (event) => {
    setValue(event.value);
  }

  return (
    <Select
      className="occasionSelect"
      id={id}
      options={options}
      defaultValue={options[0]}
      onChange={onChangeHandler}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "3.75rem",
          display: "flex",
          border: "2px solid var(--primary1)",

          borderRadius: "1rem"
        }),
        valueContainer: (baseStyles) => ({
          ...baseStyles,
          paddingLeft: "1rem",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "black",
          fontFamily: "Karla, sans-serif",
          fontSize: "1.13rem",

        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "1rem"
        }),
        menuList: (baseStyles) => ({
          ...baseStyles,
          fontSize: "1.13rem",
          borderRadius: "1rem"
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          paddingLeft: "1rem",
        })
      }}
    />
  );
}