import React, { useEffect, useState } from 'react';
import '../styles/withdraw.css';

const ClientWithdrawal = ({setOpenWithdraw}) => {
    
    const [accountName, setAccountName] = useState('');
    const [bankName, setBankName] = useState('');
    const [amount, setAmount] = useState('');

    // Check if all fields are filled
    const isFormValid = bankName.trim() !== '' && accountName.trim() !== '' && amount.trim() !== '';

    return (
        <div className="withdraw-overlay" >
            <div className="withdraw-container">
                <p>Enter your details</p>
                <form>
                    <input 
                        type='text' 
                        value={bankName} 
                        onChange={(e) => setBankName(e.target.value)} 
                        placeholder='Bank Name'
                    />
                    <input 
                        type="text" 
                        placeholder='Bank Account Name' 
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)} 
                    />
                    <input 
                        type="number" 
                        placeholder='Amount' 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <div>
                        <button type="button" onClick={()=>setOpenWithdraw(false)}>Cancel</button>
                        {/* Disable Confirm button if any input is empty */}
                        <button type="submit" disabled={!isFormValid}>
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ClientWithdrawal;
