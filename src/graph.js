import { Line } from "react-chartjs-2";

import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
ChartJS.defaults.color = '#fff';

const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets:[{
        data:[2, 2.8, 3, 4, 
            5.5, 6, 8],
        backgroundColor:'transparent',
        borderColor:'#ffffff',
        color:'#ffffff',
        pointBorderColor:'transparent',
        pointBorderWidth: 4,
        tension:0.5
    }]
};
const options = {
    plugins: {
        legend: false 
    },
    scales: {
        x:{
            grid: {
                display:false
            }
        },
        y:{
            min:2,
            max:10,
            ticks: {
                stepSize:2,
                callback: (value) => value + 'K'
            },
            grid:{
                borderDash:[10]
            },
            font: {
                size: 12
            }
        }
    },
    layout:{
        padding:{
        
        }
    }

};


const graph = () => {
    return ( 
        <div className=" text-white font-poppins text-xs font-medium">
            <Line data={data} options={options}></Line>
        </div>
     );
}
 
export default graph;