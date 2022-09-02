import { useContext, useEffect, useState } from 'react'
import { ApeDaoContext } from '../context/context'

import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Header from '../components/Header'
import ProposalCard from '../components/ProposalCard'
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  const [proposals, setProposals] = useState(null)
  const [proposalInput, setProposalInput] = useState('')
  const [dummyData] = useState([{
    proposer: "0xA35991d95111a4e6172d720eB92B718C2BD04B78",
    votes: [{ type: 0, label: 'Against', count: 30443 },
    { type: 1, label: 'For', count: 43232 },
    { type: 2, label: 'Abstain', count: 3432 }],
    state: 1,
    description: "This is a Dummy proposal!"
  }])

  const {
    getAllProposals,
    isExecutable,
    currentUserAddress,
    createProposal,

  } = useContext(ApeDaoContext)

  useEffect(() => {
    getAllProposals()
      .then(proposals => {
        if (proposals.length) {
          setProposals(proposals.reverse())
          console.log(proposals)

        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      {currentUserAddress ? (
        <>
          <Header proposals={proposals} />
          <ToastContainer />

          {proposals ? (
            <div className={styles.content}>
              <div className={styles.createProposalForm}>
                <div className={styles.formTitle}>Make a Proposal</div>
                <input
                  className={styles.formInput}
                  placeholder='Make a Proposal'
                  value={proposalInput}
                  onChange={e => {
                    setProposalInput(e.target.value)
                  }}
                />
                <button
                  className={styles.formButton}
                  disabled={!proposalInput}
                  onClick={() => {
                    createProposal(proposalInput)
                    setProposalInput('')
                    toast.info('⏳ Submitting Proposal ⏳', {
                      position: "top-center",
                      autoClose: 8000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                  }}
                >
                  Submit
                </button>
              </div>

              <div className={styles.proposals}>
                {proposals &&
                  proposals.map(proposal => {
                    return (
                      <ProposalCard key={Math.random()} proposal={proposal} />
                    )
                  })}
              </div>
            </div>
          ) : (
            <div className={styles.content}>
              <div className={styles.createProposalForm}>
                <div className={styles.formTitle}>Make a Proposal</div>
                <input
                  className={styles.formInput}
                  placeholder='Make a Proposal'
                  value={proposalInput}
                  onChange={e => {
                    setProposalInput(e.target.value)
                  }}
                />
                <button
                  className={styles.formButton}
                  disabled={!proposalInput}
                  onClick={() => {
                    createProposal(proposalInput)
                  }}
                >
                  Submit
                </button>
              </div>

              <div className={styles.proposals}>
                {dummyData &&
                  dummyData.map(data => {
                    return (
                      <ProposalCard key={Math.random()} data={data} />
                    )
                  })}
              </div>
            </div>
          )}
        </>
      ) : (
        <Login proposals={proposals} />
      )}
    </div>
  )
}