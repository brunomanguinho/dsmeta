import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import {useState} from "react";

function Card(){
    const [minDate, setMinDate] = useState(new Date(new Date().setDate(new Date().getDate() - 365)));
    const [maxDate, setMaxDate] = useState(new Date());

    return(
        <>
        <div className="dsmeta-card">
            <h2>Vendas</h2>              
            
            <div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={minDate}
                    onChange={(date: Date) => {setMinDate(date)}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="dsmeta-form-control-container">
                <DatePicker
                    selected={maxDate}
                    onChange={(date: Date) => {setMaxDate(date)}}
                    className="dsmeta-form-control"
                    dateFormat="dd/MM/yyyy"
                />
              </div>
            </div>

            <div>
              <table className="dsmeta-sales-table">
                <thead>
                  <tr>
                    <th className="show992">ID</th>
                    <th className="show576">Data</th>
                    <th>Vendedor</th>
                    <th className="show992">Visitas</th>
                    <th className="show992">Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="show992">0</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">11</td>
                    <td className="show992">10</td>
                    <td>R$ 5.300,00</td>
                    <td>
                      <NotificationButton />
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">1</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">8</td>
                    <td className="show992">1</td>
                    <td>R$ 5.300,00</td>
                    <td>
                        <NotificationButton />
                    </td>
                  </tr>
                  <tr>
                    <td className="show992">2</td>
                    <td className="show576">05/09/2022</td>
                    <td>Anakin</td>
                    <td className="show992">10</td>
                    <td className="show992">0</td>
                    <td>R$ 5.300,00</td>
                    <td>
                        <NotificationButton />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>        
        </>
    )
}

export default Card;