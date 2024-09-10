"use client";
import styles from "./contactForm.module.css";
import AttachmentInput from "@/components/contactComponent/attachmentInput/Attachment";

const ContactForm = () => {
  return (
    <section className={styles.conform}>
      <div>
        <h3> WRITE A MESSAGE</h3>
      </div>

      <form
        method="POST"
        action="https://formsubmit.co/brahmbir68+Hey@gmail.com"
        encType="multipart/form-data"
        id="klk"
        className={styles.contact_form}
        autoComplete="off"
        noValidate=""
        data-test-cy="contact-form"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="basic"></input>
        <input type="text" name="_honey" style={{ display: "none" }}></input>
        <input type="hidden" name="_next" value={process.env.SITEURL}></input>
        <fieldset>
          <legend>DETAILS</legend>
          <div className={`${styles.input_wrapper} ${styles.formMess}`}>
            <input
              type="text"
              name="name"
              placeholder=" "
              id={styles["name_input"]}
            />{" "}
            <label htmlFor={styles["name_input"]}>Full Name</label>
          </div>
          <div className={`${styles.input_wrapper} `}>
            <input
              type="email"
              id={styles["email_input"]}
              name="email"
              placeholder=" "
              pattern="[a-z\d][a-z.\d_-]*@[a-z\d_-]+(\.[a-z\d]+)*"
              required=""
              data-test-cy="email"
            />{" "}
            <label htmlFor={styles["email_input"]}>Email*</label>
          </div>
          <span className={styles.submission_error_email_message} />
        </fieldset>
        <fieldset className={styles.message_section}>
          <legend>MESSAGE</legend>
          <div className={`${styles.input_wrapper} ${styles.message_wrapper}`}>
            <textarea
              onChange={(e) => {
                e.target.value
                  ? e.target.setAttribute("data-empty", "false")
                  : e.target.setAttribute("data-empty", "true");
              }}
              id={styles["message_input"]}
              name="message"
              data-empty="true"
              rows={5}
              defaultValue=""
            />
            <label htmlFor={styles["message_input"]}>
              What is your project about?
            </label>
          </div>
          <AttachmentInput />
        </fieldset>
        <button type="submit" className={styles.send_button}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
