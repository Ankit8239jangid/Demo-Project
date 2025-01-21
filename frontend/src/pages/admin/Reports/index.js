import React, { useState, useEffect } from 'react'
import PageTitle from '../../../components/PageTitle'
import { Table, message, Spin } from 'antd'
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice'
import { useDispatch } from 'react-redux'
import { getAllAttempts } from '../../../apicalls/reports'
import moment from 'moment'

function AdminReportsPage() {
  const [reportsData, setReportsData] = useState([])
  const [filters, setFilters] = useState({
    examName: "",
    userName: "",
  })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <>{record.exam.name}</>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>,
    },
    {
      title: "User",
      dataIndex: "user",
      render: (text, record) => <>{record.user.name}</>,
    },
    {
      title: "Total Marks",
      dataIndex: "totalMarks",
      render: (text, record) => <>{record.exam.totalMarks}</>,
    },
    {
      title: "Passing Marks",
      dataIndex: "passingMarks",
      render: (text, record) => <>{record.exam.passingMarks}</>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "obtainedMarks",
      render: (text, record) => <>{record.result.correctAnswers.length}</>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <>{record.result.verdict}</>,
    },
  ]

  const getData = async (tempFilters) => {
    try {
      setLoading(true)
      dispatch(ShowLoading())
      const response = await getAllAttempts(tempFilters)
      dispatch(HideLoading())
      setLoading(false)
      if (response.success) {
        setReportsData(response.data)
        message.success(response.message)
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
    getData(filters)
  }, [filters]) // Make it dependent on filters

  return (
    <div>
      <PageTitle title="Reports" />
      <div className="divider"></div>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          placeholder="Exam"
          value={filters.examName}
          onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
        />
        <input
          type="text"
          placeholder="User"
          value={filters.userName}
          onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
        />
        <button
          className="primary-outlined-btn"
          onClick={() => {
            setFilters({
              userName: "",
              examName: "",
            })
            setReportsData([]) // Clear the reports data when filters are cleared
            getData({
              userName: "",
              examName: "",
            })
          }}
        >
          Clear
        </button>
        <button className="primary-contained-btn" onClick={() => getData(filters)}>
          Search
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <Spin size="large" />
        </div>
      ) : (
        <Table columns={columns} className="mt-2" dataSource={reportsData} />
      )}
    </div>
  )
}

export default AdminReportsPage
