---
id: domains
title: Custom Domains
---

**Custom Domains** allow you to bring a custom URL to your services on KintoHub.
KintoHub supports both **root** and **sub** domains from **ANY** domain provider using CNAMEs.
Every **Custom Domain** on KintoHub gets a **FREE** Let's Encrypt SSL certificate.

The following service types support **Custom domains**:

* Web Apps
* Backend APIs

## Setting up a Domain

1. Login to KintoHub
2. Choose your environment you are interested in deploying into at the top left.
3. Create or select an existing a **Web App**, **Website** or **Backend API** service to edit 
4. Click on the **Domains** tab near the top center of the Service page.
5. Enter in your domain or subdomain you wish to map to your service.
6. Click **Add Domain**
7. Follow the instructions to add a **CNAME** key and value to your DNS host provider
8. Once complete click **Verify**

## Domain Status

Let's Encrypt SSL certificate expire every few months.
KintoHub will automatically renew your SSL certificate without any downtime of your service.
Your Let's Encrypt certificate status is displayed under **SSL Status**

## Remove Domain

Under the **Domains** tab click the **Delete** button in the row of the domain you wish to remove.
