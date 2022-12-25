import React, { useContext } from 'react';
import './questionList.css';
import datas from '../../json/questions.json';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { SearchFilterValue } from '../context/SearchFiltr';
import { useParams } from 'react-router-dom';
import SingleQuestion from '../question/singleQuestion';


function QuestionList() {
    const params = useParams();
    const searchValue = useContext(SearchFilterValue);
    const getSearchDta = searchValue.searchv.toLowerCase();
    let val;

    if (params.topic) {
        val = params.topic
    } else {
        val = '';
    }

    const sendData = () => {
        if (datas.filter((data) => data.title.toLowerCase().includes(getSearchDta)).length === 0) {
            return (<div className='noCont'>
                <h1><ImageNotSupportedIcon className='noIcon' /></h1>
                <h4>No such data in this title search</h4>
            </div>)
        }
    }

    return (
        <>
            <div>
                {datas.filter((data) =>
                    data.title.toLowerCase().includes(getSearchDta) &&
                    data.catogory.toLowerCase().includes(val)).map(data => {
                        return <SingleQuestion key={data.questionId} data={data}/>
                    })}
            </div>
            {sendData()}
        </>
    )
}

export default QuestionList;