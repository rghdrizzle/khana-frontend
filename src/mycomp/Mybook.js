import React from 'react'

export default function Mybook() {
    return (
        <div>
            <h1 class="mybookhead">My bookings</h1>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Sree Akshyam
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div class="accordion-body">
                        <strong>Name: Sree Akshyam.</strong><br/>
                        <strong>Total cost: 2000rs.</strong><br/>
                        <strong>Date:__/__/____</strong><br/>
                        <strong>Time:_pm</strong><br/>
                        <strong>Review:5/5</strong><br/>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        BBQ nation
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                    <strong>Name: Sree Akshyam.</strong><br/>
                        <strong>Total cost: 2000rs.</strong><br/>
                        <strong>Date:__/__/____</strong><br/>
                        <strong>Time:_pm</strong><br/>
                        <strong>Review:5/5</strong><br/> <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Rajasthani Dhaba
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                    <strong>Name: Sree Akshyam.</strong><br/>
                        <strong>Total cost: 2000rs.</strong><br/>
                        <strong>Date:__/__/____</strong><br/>
                        <strong>Time:_pm</strong><br/>
                        <strong>Review:5/5</strong><br/><code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
