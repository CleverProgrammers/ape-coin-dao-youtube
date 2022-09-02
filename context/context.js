//Import Dependencies and hooks needed for app
import { createContext } from 'react'
import {
    useVote,
    useToken,
    useAddress,
    useMetamask,
    useDisconnect,
} from '@thirdweb-dev/react'
import { VoteType } from '@thirdweb-dev/sdk'
import { ethers } from 'ethers'

export const ApeDaoContext = createContext()
export const ApeDaoProvider = ({ children }) => {

    /*
      Step 1. Get User address using thirdwebs hook
      Step 2. Get Token and vote contract instances using thirdwebs hooks
      Step 3. We need way to connect and disconnect from the dapp. 
    */
    const currentUserAddress = true //Get the address using thirdwebs convenient hooks

    let vote = ''
    let token = ''
    let connectWithMetamask = '';
    let disconnectWallet = '';




    //Get all the proposals in the contract
    const getAllProposals = async () => {

    }

    //Check if proposal given is executable
    const isExecutable = async id => {

    }

    //Check if the user has voted for the given proposal
    const checkIfVoted = async id => {

    }

    //Create  proposal to mint tokens to the DAO's treasury
    const createProposal = async description => {

    }


    //Execute proposal if the proposal is successful
    const executeProposal = async id => {

    }


    //Vote for the proposal and delegate tokens if not already done. 
    const voteFor = async (id, type, reason) => {

    }
    return (
        <ApeDaoContext.Provider
            value={{
                getAllProposals,
                isExecutable,
                voteFor,
                createProposal,
                currentUserAddress,
                connectWithMetamask,
                disconnectWallet,
                executeProposal,
            }}
        >
            {children}
        </ApeDaoContext.Provider>
    )
}
