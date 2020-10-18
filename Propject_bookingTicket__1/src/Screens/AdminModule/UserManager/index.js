import React, { useEffect, useState } from 'react';
import { Input, InputNumber, Table, Form } from 'antd';
import { userService } from '../../../Service';
import { useForm } from "react-hook-form";
import '../../../Sass/Components/button_Form.scss';



export default function UserManager() {

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{
                            margin: 0,
                        }}
                        rules={[
                            {
                                required: true,
                                message: `Please Input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                        children
                    )}
            </td>
        );
    };

    const [user, setuser] = useState({});

    useEffect(() => {
        userService.getInfo()
            .then(res => {
                let lstUser = res.data;
                setuser(lstUser);
            })
            .catch(err => {
                console.log(err.reponse.data);
            })
    })

    const columns = [
        {
            title: 'STT',
            width: 100,
            dataIndex: 'stt',
            key: '1',
            fixed: 'left',
        },
        {
            title: 'Tài khoản',
            width: 100,
            dataIndex: 'taiKhoan',
            key: '1',
            fixed: 'left',
        },
        {
            title: 'Họ tên',
            width: 100,
            dataIndex: 'hoTen',
            key: '2',
            fixed: 'left',
        },
        {
            title: 'Mật khẩu ',
            dataIndex: 'matKhau',
            key: '3',
            width: 150,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: '4',
            width: 150,
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDT',
            key: '5',
            width: 150,
        },
        {
            title: 'Mã loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
            key: '6',
            width: 150,
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'center',
            width: 120,
            render: (_, record) =>
                <div>
                    <button className="btn btn-danger mr-2" onClick={() => { handleDelete(record.key) }}>XÓA</button>
                    <button className="btn btn-warning">SỬA</button>
                </div>
            ,
        },
    ];

    const handleDelete = (e) => {
        console.log(alert(e));

    }


    const data = [];

    Object.entries(user).map(([index, item]) => {
        return (data.push({
            key: index.toString(),
            stt: (index),
            taiKhoan: item.taiKhoan,
            hoTen: item.hoTen,
            matKhau: item.matKhau,
            email: item.email,
            soDT: item.soDt,
            maLoaiNguoiDung: item.maLoaiNguoiDung,

        })
        )
    })

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (values) => { console.log(values); }

    return (
        <div className="container">
            <div className="row mt-4 ">



                <div className="col-6"><h1>Danh sách người dùng </h1></div>
                <div className="col">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Nhập tên người dùng" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                <div className="col text-right">
                    <button type="button" className="btn  button_Form" data-toggle="modal" data-target="#modelId">THÊM NGƯỜI DÙNG</button>
                </div>

            </div>

            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 1500, y: 800 }}
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
            />

            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h3>THAY ĐỔI MẬT KHẨU</h3>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="hoTen">Họ tên</label>
                                <input
                                    type="text"
                                    name="hoTen"
                                    placeholder="Nhập họ và tên"
                                    ref={register({
                                        required: "Họ Tên không được rỗng !!"
                                    })}
                                    className={`form-control ${errors.hoTen ? "is-invalid" : ""}`}


                                />
                                <p className="invalid-feedback" name="hoTen">{errors.hoTen?.message}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="taiKhoan">Tài khoản</label>
                                <input
                                    type="text"
                                    name="taiKhoan"
                                    placeholder="Nhập tài khoản "
                                    ref={register({
                                        required: "Tài khoản không được rỗng !!"
                                    })}
                                    className={`form-control ${errors.taiKhoan ? "is-invalid" : ""}`}


                                />
                                <p className="invalid-feedback" name="taiKhoan">{errors.taiKhoan?.message}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Mật khẩu </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Nhập password"
                                    ref={register({
                                        required: "Mật khẩu không được rỗng !!"
                                    })}
                                    className={`form-control ${errors.password ? "is-invalid" : ""}`}


                                />
                                <p className="invalid-feedback" name="password">{errors.password?.message}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Nhập email"
                                    ref={register({
                                        required: "Email không được rỗng !!",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Email không hợp lệ !!"
                                        }
                                    })}
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}

                                />
                                <p className="invalid-feedback" name="email">{errors.email?.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Số điện thoại</label>
                                <input
                                    name="soDT"
                                    type="text"
                                    placeholder="Nhập số điện thoại"
                                    ref={register({
                                        required: "Số điện thoại không được rỗng !!",
                                        pattern: {
                                            value: /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
                                            message: "Số điện thoại không hợp lệ !!"
                                        }
                                    })}
                                    className={`form-control ${errors.soDT ? "is-invalid" : ""}`}

                                />
                                <p className="invalid-feedback" name="soDT">{errors.soDT?.message}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="maLoaiNguoiDung">Loại người dùng </label>
                                <input
                                    name="maLoaiNguoiDung"
                                    type="text"
                                    placeholder=""
                                    ref={register}
                                    className={`form-control ${errors.maLoaiNguoiDung ? "is-invalid" : ""}  `}

                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Mã nhóm</label>
                                <select
                                    name="maNhom"
                                    className={`form-control ${errors.maNhom ? "is-invalid" : ""}`}
                                    ref={register({
                                        required: "Mã không được rỗng !!"
                                    })}
                                    defaultValue="GP03"

                                >
                                    <option>GP01</option>
                                    <option>GP02</option>
                                    <option>GP03</option>
                                    <option>GP04</option>
                                    <option>GP05</option>
                                    <option>GP06</option>
                                    <option>GP07</option>
                                    <option>GP08</option>
                                    <option>GP09</option>
                                    <option>GP10</option>
                                </select>
                                <p className="invalid-feedback" name="maNhom">{errors.maNhom?.message}</p>
                            </div>
                            <div>
                                <button type="submit" className="btn button_Form" >HOÀN TẤT</button>
                            </div>
                            <div className="forgotPass text-info"><a>Quên mật khẩu hiện tại ??</a></div>
                        </form>
                    </div>


                </div>

            </div>
        </div>
    )
}
