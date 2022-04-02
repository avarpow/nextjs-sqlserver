import { GetServerSideProps } from 'next'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/record`)
    const data = await res.json()
    //console.log(data)
    return {
        props: { data }, // will be passed to the page component as props
    }
}
function Page({ data }) {
    // will resolve posts to type Data
    console.log(data)
    const record_schema = ['reader_id', 'book_id', 'borrow_date', 'return_data', 'notes']
    return (
        <div >
            <table className={styles.center}>
                <thead>
                    <tr>
                        {
                            record_schema.map(function (d, idx) {
                                return (<td>{d}</td>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(function (d, idx) {
                            return (
                                <tr>
                                    {record_schema.map(function (y, idx) {
                                        return (<td>{d[y]}</td>)
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <h1 className={styles.center}>
                <Link href="/">
                    <a>返回主页</a>
                </Link>
            </h1>
        </div>
    )
}

export default Page