import React from 'react'

export default function Search()  {
    return (
      <>
        <form action="" method="post">
        <div class="input">
          <div class="input-group">
            <label for="area"></label>
            <input type="text" className='form-control bt-0' id="locality" name="locality" placeholder="Anna Nagar"/>
            <label for="seats"></label>
            <input type="number" className='form-control bt-1' id="seats" name="total_seats" placeholder="No. of Seats" min="1" required/>
          </div>
          <div className="input-group">
            <label for="date"></label>
            <input type="date" className='form-control bt-2' id="date" name="date"  required/>
            <label for="time"></label>
            <select className='form-control bt-3' id="time" name="room_preference" placeholder='Time' required>
                <option value="7">7-8pm</option>
                <option value="8">8-9pm</option>
                <option value="8">9-10pm</option>
                <option value="8">10-11pm</option>
            </select>
          <span class="input-btn">
            <button class="btn-4 text-center" type="submit" value="submit">RESEREVE NOW</button>
          </span>
          </div>
        </div>
      </form>
      </>
    )
  };