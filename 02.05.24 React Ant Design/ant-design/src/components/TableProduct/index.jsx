import { Button, Popconfirm, Table, Tooltip, message } from 'antd';
import { useEffect, useState } from 'react';
import { deleteOneID, getAll } from '../../services';
import { endpoints } from '../../services/constant';



function TableProduct() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAll(endpoints.products).then((response) => {
            setData(response)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            sorter: (a, b) => a.id - b.id
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (element, data) => {
                return <img src={element} alt={data.title} width={100} />
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (element) => (
                <Tooltip title={element}>
                    <span>{element.slice(0, 50)}...</span>
                </Tooltip>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price
        },
        {
            title: 'Delete',
            render: (data) => (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={() => confirm(data.id)}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            )
        },
        {
            title: 'Edit',
            render: () => (
                <Button type='primary' danger>
                    Edit
                </Button>
            )
        },
    ];
    const confirm = (id) => {
        deleteOneID(endpoints.products, id).then((res) => {
            if (res.status === 200) {
                const filtered = [...data].filter((q) => q.id != id)
                setData(filtered)
            }
        })
    };
    const cancel = (e) => {
        console.log(e);
        message.error('Click on No');
    };
    return (
        <div style={{ width: "1200px", margin: "0 auto" }}>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 3 }}
                rowKey={"id"}
            />
        </div>
    )
}

export default TableProduct