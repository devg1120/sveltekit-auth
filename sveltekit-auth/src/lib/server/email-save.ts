import nodemailer from 'nodemailer';
import * as aws from '@aws-sdk/client-ses';
import {
	FROM_EMAIL,
	AWS_ACCESS_KEY_ID,
	AWS_SECRET_ACCESS_KEY,
	AWS_REGION,
	AWS_API_VERSION
} from '$env/static/private';
//import { z } from "zod";
export default async function sendEmail(
	email: string,
	subject: string,
	bodyHtml?: string,
	bodyText?: string
) {

	try {
              console.log(email)
              console.log(subject)
              console.log(bodyHtml)
              console.log(bodyText)


	} catch (error) {
		throw new Error(`Error sending email: ${JSON.stringify(error)}`);
	}
}
