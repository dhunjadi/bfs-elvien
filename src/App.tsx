import Button from './components/Button';
import Navbar from './components/Navbar';
import GhostIcon from './assets/GhostIcon.svg';
import {RootState, useAppDispatch, useAppSelector} from './store/store';
import {useEffect} from 'react';
import {getGymnastList} from './store/thunks/gymnastThunks';

function App() {
    const {gymnastList, isLoading} = useAppSelector((state: RootState) => state.gymnast);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGymnastList());
    }, [dispatch]);
    return (
        <div className="p-home">
            <Navbar />
            <div className="p-home__header">
                <div className="p-home__header_content">
                    <h1>My Applications</h1>

                    <div>
                        <Button varient="primary">New application</Button>
                        <Button varient="primary" disabled hasIcon>
                            Open
                        </Button>
                    </div>
                </div>
                <div className="p-home__header_divider" />
            </div>

            <main className="p-home__content">
                {isLoading ? (
                    <>
                        <img className="p-home__content_icon" src={GhostIcon} alt="ghost icon" />
                        <h3>No applications yet</h3>
                        <small>List of your requests will appear here when you add gymnasts.</small>
                        <Button varient="tertiary">Apply gymnasts</Button>
                    </>
                ) : (
                    <div>
                        {gymnastList.map((gymnast) => {
                            return <span>{gymnast.firstName} </span>;
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
