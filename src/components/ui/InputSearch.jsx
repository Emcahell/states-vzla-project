import IconFilter from '../icons/IconFilter';

const InputSearch = ({ value, onChange, setSortOption }) => {
  return (
    <div className='relative'>
      <input 
      type="search" 
      name="search" 
      className='w-full h-12 px-4 text-base text-wine border-2 border-wine-light rounded-lg bg-white focus:outline-none focus:shadow-[0_0_2px] focus:shadow-wine'
      placeholder='Buscar'
      value={value}
      onChange={onChange}
      />
      <IconFilter setSortOption={setSortOption} />
    </div>
  )
}

export default InputSearch;