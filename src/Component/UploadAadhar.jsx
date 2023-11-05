import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Avatar from 'react-avatar-edit'

function Example() {
  const [show, setShow] = useState(false);
  const [imgCrop, setImgCrop] = useState(false)
  const [storeImage, setStoreImage] = useState([])
  const [aadharEnlarged, setAadharEnlarged] = useState(false);
  const onCrop = (view) => {
    setImgCrop(view)
  }

  const onClose = () => {
    setImgCrop(null)
  }

  const saveImage = () => {
    setStoreImage([...storeImage, { imgCrop }])
    setShow(false)
  }

  const toggleAadharEnlarged = () => {
    setAadharEnlarged(!aadharEnlarged)
} 

  const profileImageShow = storeImage.map((item) => item.imgCrop)

  return (
    <>
      <img src={profileImageShow.length ? (profileImageShow) : ("https://www.themmsglobal.com/services/aadhar.jpg")}
        onClick={() => setShow(true)}
        className="main-kyc-image"
        />


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w" style={{ marginTop: "18rem", width: "40.2rem", marginLeft: "48rem" }}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Update Profile
          </Modal.Title>
        </Modal.Header>
        <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} id="avatar-cropping-font"/>
        <div className="d-flex">
          <Button className="btn btn-black" onClick={saveImage}>
            Save
          </Button>
          <Button className="btn btn-black w-150px" onClick={toggleAadharEnlarged} style={{position:"relative"}}>
            Check Image
          </Button>
        </div>
        {
        aadharEnlarged && (
          <div onClick={toggleAadharEnlarged}>
            <img
              src={profileImageShow.length ? (profileImageShow) : ("https://www.themmsglobal.com/services/aadhar.jpg")}
              className="kyc-image-detail"
              alt="Enlarged Pan Card"
            />
          </div>
        )
      }
      </Modal>
      
    </>
  );
}

export default Example;