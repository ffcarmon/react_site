import React, {useState} from 'react';
import {Modal, Button, Input, List} from 'antd';
import {EditOutlined, DeleteOutlined, SearchOutlined} from '@ant-design/icons';
import './ToDoList.css';
import Dashboard from "../Dashboard";

const ToDoList = () => {
    const [activities, setActivities] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newActivity, setNewActivity] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        if (newActivity.trim()) {
            if (editingIndex !== null) {
                const updatedActivities = activities.map((item, index) =>
                    index === editingIndex ? newActivity.trim() : item
                );
                setActivities(updatedActivities);
                setEditingIndex(null);
            } else {
                setActivities([...activities, newActivity.trim()]);
            }
            setNewActivity('');
            setIsModalVisible(false);
        }
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        setEditingIndex(null);
        setNewActivity('');
    };

    const handleInputChange = (e) => {
        setNewActivity(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleModalOk();
        }
    };

    const handleEdit = (index) => {
        setNewActivity(activities[index]);
        setEditingIndex(index);
        setIsModalVisible(true);
    };

    const handleDelete = (index) => {
        const updatedActivities = activities.filter((_, i) => i !== index);
        setActivities(updatedActivities);
    };

    // Filter activities based on the search query
    const filteredActivities = activities.filter((activity) =>
        activity.toLowerCase().includes(searchQuery)
    );

    return (
        <Dashboard>
            <div className="todolist-frame">
                <div className="todo-container">
                    <h2>Pending Activities</h2>

                    {/* Search Bar */}
                    <Input
                        prefix={<SearchOutlined/>}
                        placeholder="Search activities..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{marginBottom: 20, width: '100%'}}
                    />

                    <Button type="primary" onClick={showModal} style={{marginBottom: 20}}>
                        Add Activity
                    </Button>

                    <List
                        className="todo-list"
                        dataSource={filteredActivities}
                        renderItem={(item, index) => (
                            <List.Item className="list-item">
                                <div className="activity-text">{item}</div>
                                <div className="action-buttons">
                                    <button type="button" className="btn btn-primary" icon={<EditOutlined/>}
                                            onClick={() => handleEdit(index)}>Edit</button>
                                    <button type="button" className="btn btn-danger" icon={<DeleteOutlined/>}
                                            onClick={() => handleDelete(index)}>Delete</button>
                                </div>
                            </List.Item>
                        )}
                    />

                    <Modal
                        title={editingIndex !== null ? "Edit Activity" : "Add New Activity"}
                        open={isModalVisible}
                        onOk={handleModalOk}
                        onCancel={handleModalCancel}
                        className="modal-top-slide"
                    >
                        <Input
                            value={newActivity}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Enter activity..."
                            className="full-width-input"
                        />
                    </Modal>
                </div>
            </div>
        </Dashboard>
    );
};

export default ToDoList;
