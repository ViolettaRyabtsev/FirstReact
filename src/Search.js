import React, { useState } from 'react'

const Search = () => {
    const options = ['love', 'sex', 'pashion', 'pain']
    //const [mood, updateMood] = useState('what do you feel right now?')
    const [feel, setOptions] = useState('love')

    return (

        <div className='search-param'>

            <label htmlFor='search-param'>
                Moood and Emotions
                    <select
                    className='search-emotions'

                    value={feel}
                    onChange={event => setOptions(event.target.value)}
                    onBlur={event => setOptions(event.target.value)} >
                    <option>
                        All
                    </option>

                    {options.map(feel => (
                        <option value={feel}> {feel}

                        </option>
                    ))


                    }

                </select>

            </label>


        </div>
    )
}

export default Search;