import * as Styles from './styles';

export const DiagnosesDisplay = (diagnostic) => {

    const columns = [
        {
            title: 'Name',
            dataIndex: ['Issue', 'Name'],
            key: 'name'
        },
        {
            title: 'Professional Name',
            dataIndex: ['Issue', 'ProfName'],
            key: 'profName'
        },
        {
            title: 'ICD Name',
            dataIndex: ['Issue', 'IcdName'],
            key: 'icdName',
        },
        {
            title: 'Specialists',
            dataIndex: 'Specialisation',
            key: 'specialists',
            render: (specialisations) => specialisations.map((specialisation) => specialisation.Name).join(', ')
        },
        {
            title: 'Accuracy',
            dataIndex: ['Issue', 'Accuracy'],
            key: 'accuracy',
            render: (accuracy) => (
                <>
                    <Styles.Accuracy
                        percent={Math.round(accuracy*100)/100}
                        size="small"
                        type="circle"
                        strokeColor={{ '0%': 'rgb(82, 229, 231)', '100%': 'rgb(19, 12, 183)' }}
                    />
                </>
            )
        }
    ];

    return (
        <Styles.DiagnosesDisplayContainer>
            <Styles.DiagnosesTable
                dataSource={diagnostic}
                columns={columns}
                rowKey="id"
                pagination={{
                    pageSize: 4
                }}
            />
        </Styles.DiagnosesDisplayContainer>
    )
}