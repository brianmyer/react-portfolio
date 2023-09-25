import { validateEmail } from '../utils/helpers';


export default function Contact() {


  return (
    <form class="needs-validation" novalidate>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Please provide your name"
          required />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Please provide your email"
          required />
        <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          class="form-control"
          id="message"
          rows="3"
          placeholder="Let me know what you think!"
          required>
        </textarea>
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  );
}
