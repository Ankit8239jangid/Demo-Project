import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../../../components/PageTitle'
import { Table, message, Popconfirm, Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice'
import { getAllExams, deleteExam } from '../../../apicalls/exams'

function ExamsPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(false)

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      key: "totalMarks"
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
      key: "passingMarks"
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div className='flex gap-2'>
          <i className='ri-pencil-line cursor-pointer'
            onClick={() => navigate(`/admin/exams/edit/${record._id}`)}></i>
          <Popconfirm
            title="Are you sure you want to delete this exam?"
            onConfirm={() => deleteExamById(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <i className='ri-delete-bin-line cursor-pointer'></i>
          </Popconfirm>
        </div>
      )
    }
  ]

  const getExamsData = async () => {
    setLoading(true)
    try {
      dispatch(ShowLoading())
      const response = await getAllExams()
      dispatch(HideLoading())
      setLoading(false)
      if (response.success) {
        message.success(response.message)
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

  const deleteExamById = async (id) => {
    try {
      dispatch(ShowLoading())
      const response = await deleteExam(id)
      dispatch(HideLoading())
      if (response.success) {
        message.success(response.message)
        getExamsData()
      } else {
        message.error(response.message)
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message)
    }
  }

  useEffect(() => {
    getExamsData()
  }, [])

  return (
    <>
      <div className='flex justify-between mt-1'>
        <PageTitle title="Exams" />
        <button className='primary-outlined-btn flex items-center cursor-pointer' onClick={() => navigate('/admin/exams/add')}>
          <i className='ri-add-line'></i>
          Add Exam
        </button>
      </div>
      <div className='divider mt-1'></div>
      {loading ? (
        <Spin size="large" className="flex justify-center items-center h-[300px]" />
      ) : (
        <Table columns={columns} dataSource={exams} rowKey="_id" />
      )}
    </>
  )
}

export default ExamsPage
