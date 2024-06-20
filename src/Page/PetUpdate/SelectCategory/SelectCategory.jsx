import Select from 'react-select';
const options = [
    { value: 'CAT', label: 'CAT' },
    { value: 'DOG', label: 'DOG' },
    { value: 'BIRD', label: 'BIRD' },
    { value: 'BIRD', label: 'BIRD' },
  ];
const SelectCategory = ({selectedOption,setSelectedOption}) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div className="App">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
      </div>
    );
};

export default SelectCategory;