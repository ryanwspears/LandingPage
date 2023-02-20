import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
	return (
		<>
			<Head>
				<title>Landing Page</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={styles.main}>
				<div className={styles.head}>
					<img className={styles.logoImg} src={'/logo.png'} />
					<h1>Website Coming Soon!</h1>
					<p>Thank you shopping with us!</p>
					<p>Claim Your Free E-Book Now by Entrering Your Email Below</p>
					<form className={styles.signUpForm} name={'emails'} method={'POST'} data-netlify='true' netlify-honeypot='bot-field' action='/success'>
						<input type='hidden' name='form-name' value='emails' />
						<input type={'email'} name={'email'} />
						<p hidden>
							<label>
								Don&apos;t fill this out: <input name='bot-field' />
							</label>
						</p>
						<button type='submit'>Claim</button>
					</form>
				</div>
			</main>
		</>
	)
}
