import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@material-ui/core'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom'

const studentDetails = [
    {
        "ID": "1",
        "Name": "Abhishek Singh",
        "Age": "25",
        "Course": "MCA",
        "Batch": "2020",
    },
    {
        "ID": "2",
        "Name": "Soma Ghosh",
        "Age": "25",
        "Course": "MCA",
        "Batch": "2020"
    },
    {
        "ID": "3",
        "Name": "Rohit Singh",
        "Age": "29",
        "Course": "BBA",
        "Batch": "2019"
    },
    {
        "ID": "4",
        "Name": "Abhinadan Singh",
        "Age": "23",
        "Course": "M.Com",
        "Batch": "2020"
    },
    {
        "ID": "5",
        "Name": "Amit Jaggi",
        "Age": "26",
        "Course": "IIT",
        "Batch": "2018"
    },
    {
        "ID": "6",
        "Name": "Kunal Sengupta",
        "Age": "27",
        "Course": "MA",
        "Batch": "2020"
    }
];

const Student = () => {
    return (
        <>
            <div className="title-container">
                <h1 className="title">STUDENT PAGE</h1>
                <button className="add-student-btn">Add Student</button>
            </div>
            <div className="table-container">
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{width: 175}}>Name</TableCell>
                                <TableCell align="center">Age</TableCell>
                                <TableCell align="center">Course</TableCell>
                                <TableCell align="center">Batch</TableCell>
                                <TableCell align="center">Change</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                studentDetails.map(student => {
                                    const { ID, Name, Age, Course, Batch } = student;
                                    return (
                                        <TableRow key={ID}>
                                            <TableCell component="th" scope="row">{Name}</TableCell>
                                            <TableCell align="center">{Age}</TableCell>
                                            <TableCell align="center">{Course}</TableCell>
                                            <TableCell align="center">{Batch}</TableCell>
                                            <TableCell align="center"><Link to=""><ModeEditIcon /></Link></TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Student;