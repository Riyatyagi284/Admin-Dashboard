const BankModalView = ({ show, setShow }) => {
    return (
      <>
        {show && (
          <>
            <div className='more-modal-overlay' style={{ zIndex: '1' }}></div>
            <div
              className='.more-modal-overlay withdraw_request'
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '2',
              }}
            >
              <div className='multi-login-container'>
                <div
                  className='container-fluid white-bg'
                  style={{ width: '100%', padding: '0' }}
                >
                  <header
                    className='header more-head sky'
                    style={{
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                    }}
                  >
                    <h2 style={{ visibility: 'hidden' }}>ABCDEFSS</h2>
                    <span class='modal-close crox' onClick={() => setShow(false)}>
                      ×
                    </span>
                  </header>
                  <div className='spacing' style={{ background: '#fff' }}>
                    <div>
                      <div>
                        <label className='col-form-label'>Payment Mode </label>
                      </div>
                      <div>
                        <input type='text' value='Paytm' style={{width:"100%"}}/>
                      </div>
                    </div>

                    <div>
                      <div>
                        <label className='col-form-label'>Last four Digit Card Number</label>
                      </div>
                      <div>
                        <input type='text' value='9856' style={{width:"100%"}} />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label className='col-form-label'>UPI Id</label>
                      </div>
                      <div>
                        <input type='text' value='987530' style={{width:"100%"}}/>
                      </div>
                    </div>

                    <div>
                      <div>
                        <label className='col-form-label'>Net Banking Info</label>
                      </div>
                      <div>
                        <input type='text' value='' style={{width:"100%"}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
         )} 
      </>
    );
  };
  
  export default BankModalView;