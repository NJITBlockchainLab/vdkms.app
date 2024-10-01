---
title: About
layout: page
description: About
bodyClass: page-about
---

# About the Decentralized Vehicle Credential Management System (VDKMS)

The Decentralized Vehicle Credential Management System (VDKMS) is an innovative solution designed to revolutionize how vehicle credentials are managed, verified, and stored. Built on consortium blockchain technology, this project aims to provide a secure, transparent, and privacy-centric approach to vehicle identity management. By leveraging blockchain and decentralized identifiers (DIDs), VDKMS empowers both individuals and organizations to interact with vehicle-related data safely and efficiently.

## Project Overview

The VDKMS project utilizes Hyperledger Indy, a blockchain framework specifically tailored for decentralized identity solutions. It integrates various components, including a mobile application, blockchain nodes, a Certificate Authority (CA), mediators, and an infrastructure for communication and data sharing. These elements work together to create a comprehensive ecosystem for decentralized vehicle credential management.

## Key Components

### 1. Blockchain Ledger

The blockchain ledger serves as the backbone of the VDKMS. Using Hyperledger Indy, it manages decentralized identifiers (DIDs) and verifiable credentials, which are critical for secure identity management. Blockchain nodes participate in the consensus process, validating transactions and ensuring the network's integrity. These nodes store public identity records, such as public keys and service endpoints, while keeping sensitive information off-ledger to protect user privacy. This infrastructure allows for self-sovereign identity management across various industries, providing users with greater control over their data.

![Ledger](/images/about/ledger.png)

### 2. FHWA Vehicle End (Mobile Application)

The mobile application, known as FHWA Vehicle End, acts as the user interface for interacting with the decentralized identity ecosystem. It includes functionalities such as:

- **Login:** Secure user authentication using a PIN to access the app's features.
- **QR Code:** Generating and scanning QR codes for secure information exchange and device connections.
- **Bluetooth Integration:** Facilitates secure connections with other devices, enabling proof requests and data sharing.
- **Credentials Management:** Allows users to receive, view, and manage their vehicle credentials securely. Users can respond to proof requests and share information as needed.

Through these features, the app provides an intuitive and user-friendly experience while maintaining high levels of security and privacy.

![Vehicle End](/images/about/home.jpg)

### 3. Certificate Authority (CA)

The CA module is responsible for creating, issuing, and managing vehicle credentials. Acting as a trusted authority, it enables the following:

- **Creating Invitations:** Securely generates invitations for users to connect with the system and request credentials.
- **Issuing Credentials:** Issues verifiable credentials based on pre-defined schemas. Users can receive these credentials by scanning QR codes.
- **Terms of Service:** Incorporates terms and conditions to ensure secure and compliant credential issuance.

By utilizing the CA, the project ensures that vehicle credentials are only issued by verified authorities, maintaining trust and authenticity within the ecosystem.

![CA](/images/about/dashboard.png)

### 4. Mediator

Mediators are crucial intermediaries in the VDKMS architecture, facilitating secure and flexible communication between agents. Particularly vital for mobile wallet users, mediators enable indirect message delivery, overcoming mobile operating system limitations. Here's how they enhance the system:

- **Routing and Encryption:** Mediators act as routing agents, receiving encrypted messages from senders and forwarding them to recipients. They use layered encryption, ensuring that even intermediaries cannot access the message content.
- **Mobile Support:** Allows mobile devices to participate in decentralized identity communications, even when they cannot receive direct messages.
- **Privacy:** Obscures communication endpoints and supports complex routing scenarios, providing an additional layer of privacy and security.

The mediator model in VDKMS creates a robust communication framework that upholds end-to-end encryption and ensures secure message transmission.

### 5. Infrastructure

The infrastructure component of VDKMS manages the creation of multi-use invitations and multicast messaging. It plays a key role in connecting vehicles and broadcasting messages based on real-time events. Key features include:

- **Multi-Use Invitations:** The infrastructure creates invitations that allow vehicles to connect to the system, establishing a dedicated, secure connection.
- **Multicast Messaging:** Broadcasts messages to all connected devices, enhancing urban mobility and safety by providing real-time communication. For example, it can alert vehicles about ongoing construction activities or approaching intersections.

This component significantly improves the efficiency and safety of vehicle interactions within the network by facilitating seamless, secure communication.

![Infrastructure](/images/about/car_incar.png)

## How It Works

1. **Blockchain Nodes and DIDs:** The system utilizes blockchain nodes to manage decentralized identifiers (DIDs) and verifiable credentials. These nodes validate transactions and store public elements of identity records, while private information is kept off-ledger, preserving user privacy.

2. **Mobile Application:** Users log into the FHWA Vehicle End mobile app, which provides various features such as credential management, QR code scanning, Bluetooth connectivity, and proof requests. The app allows users to interact with the network securely and seamlessly.

3. **Certificate Authority (CA):** The CA issues credentials to users after they receive invitations. These credentials are securely managed and can be shared with other entities within the network as needed.

4. **Mediator Communication:** Mediators act as intermediaries for secure communication between users, utilizing protocols such as WSS (WebSocket Secure) and HTTPS to maintain encrypted data transmission. This model supports privacy-focused interactions and facilitates real-time updates between mobile devices and the network.

5. **Infrastructure Broadcasts:** The infrastructure broadcasts messages to connected devices based on real-time events, enhancing safety and efficiency. These messages are distributed using dedicated multi-use invitations and multicast messaging.

## Conclusion

The Decentralized Vehicle Credential Management System (VDKMS) represents a significant advancement in how vehicle credentials and identities are managed. By utilizing blockchain technology, decentralized identifiers (DIDs), and secure communication protocols, the system offers a more privacy-centric, transparent, and user-friendly approach to vehicle identity management. As adoption of decentralized identity solutions continues to grow, VDKMS provides a solid foundation for secure, trusted interactions in the automotive industry.
