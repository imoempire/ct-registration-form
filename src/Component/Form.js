import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', Name: '', Number: '', next: '', fee: '', who: '', location: '', school: '', comments: '',
        }
    }
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <>
                <form>
                    <div class="title">
                        <h1>Codetrain Registration Form</h1><br />
                        This form is the first step to register for Codetrain's program starting on 25th July 2020. Our admissions team will reach out to you after successfully submitting your form.
                        <p >Required<span>*</span></p> <br />
                    </div>

                    {/* form */}
                    <div className="email">
                        <label>Email</label><br /><br />
                        <input type="email" name="email" value={this.state.email} placeholder="Your Email" onChange={this.handleChange} />
                    </div>
                    <div className="fullname">
                        <label>Fullname</label><br /><br />
                        <input type="text" name="Name" required="" dir="auto" placeholder="Your name" value={this.state.Name} onChange={this.handleChange} />
                    </div>

                    <div className="phone">
                        <label>Phone</label><br /><br />
                        <input type="number" name="Number" required="" dir="auto" placeholder="Your Phone" value={this.state.Number} onChange={this.handleChange} />
                    </div>

                    <div className="next">
                        <label><h1>Phone number of next of kin</h1><br />
                            Phone number of someone we can reach out to in case your phone is off or not reachable. Eg, your parent, guardian or sibling, or spouse
                        </label><br /><br />
                        <input type="text" name="next" required="" dir="auto" placeholder="Your Answer" value={this.state.next} onChange={this.handleChange} />
                    </div>

                    <div className="fee">
                        Can you pay 60% or more of the full Codetrain fees (GHS6000 for Ghanaian applicants or $1,200 for international applicants) *<br /><br />
                        <input type="radio" name="radSize" id="sizeSmall" value="small" /><label>YES</label> <br />
                        <input type="radio" name="radSize" id="sizeSmall" value="small" /><label>NO</label> <br /> <br />
                    </div>
                    <div className="who">





                        Please indicate who is going to pay your fees *<br /><br />
                        <input type="checkbox" name="radSize" id="sizeMed" value="small"/>
                        <label>Yourself</label>
                        <input type="checkbox" name="radSize" id="sizeMed" value="medium" />
                        <label for="sizeSmall">Parnet/Sponsor</label>
                        <input type="checkbox" name="radSize" id="sizeMed" value="large" />
                        <label for="sizeMed">Organization</label>
                        <h5>Select one option</h5>
                    </div>
                    <div className="location">
                        <label>Location</label><br /><br />
                        <input type="text" name="location" required="" dir="auto" placeholder="Your Answer" value={this.state.location} onChange={this.handleChange} />
                    </div>

                    <div className="school">
                        Current or previous school *<br /><br />
                        <input type="text" name="school" required="" dir="auto" placeholder="Your Answer" value={this.state.school} onChange={this.handleChange} />
                    </div>

                    <div className="why">
                        Why do you want to join Codetrain *<br /><br />
                        <textarea name="comments" id="comments" style={{ width: '100%', height: '50%;' }} value={this.state.comments} onChange={this.handleChange}>
                        </textarea><br />
                    </div>

                    <div className="how">
                        How did you hear about Codetrain ? *<br /><br />
                        <input type="text" name="how" required="" dir="auto" placeholder="Your Answer" value={this.state.how} onChange={this.handleChange} />
                    </div><br />
                    A copy of your responses will be emailed to the address you provided.<br />
                    <button type="sumbit" name="sumbit" style={{ borderRadius: '8px' }}>SUBMIT</button>
                    <div className="progress">
                        <progress value="10" max="2"></progress> Page 1 of 1
                    </div>







                </form>
            </>
        )
    }
}
