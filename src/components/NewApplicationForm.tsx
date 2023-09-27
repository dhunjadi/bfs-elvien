import {useAppSelector, RootState} from '../store/store';

const NewApplicationForm = () => {
    const {countryList} = useAppSelector((state: RootState) => state.gymnast);

    return (
        <form className="c-newApplicationForm">
            <div className="c-newApplicationForm__row">
                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="fName">First name</label>
                    <input type="text" placeholder="Enter name" id="fName" />
                </div>

                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="lName">Last name</label>
                    <input type="text" placeholder="Enter last name" id="lName" />
                </div>

                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="country">Country</label>
                    <select id="country">
                        {countryList.map((country) => {
                            return (
                                <option value={country.code}>
                                    {country.flag} {country.code}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>

            <div className="c-newApplicationForm__row">
                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="programAndCategory">Program and category</label>
                    <select name="" id="programAndCategory">
                        <option value="opmd">Obavezni program - Mlađe djevojčice</option>
                    </select>
                </div>

                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="dob">Date of birth</label>
                    <input type="text" placeholder="Enter date" id="dob" />
                </div>
            </div>

            <div className="c-newApplicationForm__row">
                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="club">Club (optional)</label>
                    <input type="text" placeholder="Enter club name" id="club" />
                </div>

                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="team">Team (optional)</label>
                    <input type="text" placeholder="Team name" id="team" />
                </div>
            </div>

            <div className="c-newApplicationForm__row">
                <div className="c-newApplicationForm__row_item">
                    <label htmlFor="club">Phone (optional)</label>
                    <input type="text" placeholder="Phone number" id="phone" />
                </div>
            </div>
        </form>
    );
};

export default NewApplicationForm;
