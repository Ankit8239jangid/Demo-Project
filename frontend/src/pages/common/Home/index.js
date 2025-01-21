import { message, Row, Col, Spin } from 'antd'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllExams } from '../../../apicalls/exams'
import PageTitle from '../../../components/PageTitle'
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice'

function HomePage() {
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.users.user)

  const getExams = async () => {
    try {
      setLoading(true)
      dispatch(ShowLoading())
      const response = await getAllExams()
      dispatch(HideLoading())
      setLoading(false)
      if (response.success) {
        setExams(response.data)
      } else {
        message.error(response.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      setLoading(false)
      message.error(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      getExams()
    }
  }, [user])

  if (!user) {
    return <div>Please log in to access the exams.</div> // Show a message when the user is not logged in.
  }

  return (
    <div>
      <PageTitle title={`Hi ${user.name}, Welcome to Quiz Portal`} />
      <div className='divider'></div>
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Spin size="large" />
        </div>
      ) : (
        <Row gutter={[16, 16]} className="mt-2">
          {exams.length > 0 ? (
            exams.map((exam) => (
              <Col span={6} key={exam._id}>
                <div className='card-lg flex flex-col gap-1 p-2'>
                  <h1 className='text-2xl'>{exam.name}</h1>
                  <div className='divider'></div>
                  <h1 className='text-md'>Category: {exam.category}</h1>
                  <h1 className='text-md'>Total Questions: {exam.questions.length}</h1>
                  <h1 className='text-md'>Total Marks: {exam.totalMarks}</h1>
                  <h1 className='text-md'>Passing Marks: {exam.passingMarks}</h1>
                  <h1 className='text-md'>Duration: {exam.duration}</h1>
                  <button
                    className='primary-outlined-btn cursor-pointer'
                    onClick={() => navigate(`/user/write-exam/${exam._id}`)}
                  >
                    Start Exam
                  </button>
                </div>
              </Col>
            ))
          ) : (
            <div>No exams available.</div> // Message when no exams are found
          )}
        </Row>
      )}
    </div>
  )
}

export default HomePage
