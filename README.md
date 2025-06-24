# MRONCY School of Welding Website

This is the official website for the Daniel Muronzi Welding Training Centre (MRONCY School of Welding & Fabrication Engineering).

## Features

- Course catalog and details
- Student dashboard
- User authentication
- Payment processing with Zimbabwean payment methods
- Profile management
- Responsive design

## Tech Stack

- Next.js 14 (App Router)
- React
- TypeScript
- PostgreSQL
- NextAuth.js for authentication
- TailwindCSS for styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/meronzi_db

# NextAuth
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/meronzi-welding-centre.git
   cd meronzi-welding-centre
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Initialize the database:
   \`\`\`bash
   npm run db:init
   \`\`\`

4. Seed the database with initial data:
   \`\`\`bash
   npm run db:seed
   \`\`\`

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses PostgreSQL with the following schema:

- Users: User accounts and authentication
- Profiles: Extended user information
- Courses: Available welding courses
- Enrollments: User course enrollments
- Payments: Payment records
- Announcements: System and course announcements

## Payment Methods

The application supports the following payment methods:

- Mukuru
- EcoCash
- InnBucks
- Cash Payment
- Bank Transfer

## Deployment

The application is deployed on Vercel. To deploy your own instance:

1. Push your code to a GitHub repository
2. Import the repository in Vercel
3. Configure the environment variables
4. Deploy

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For any inquiries, please contact:
- Email: futuremillionairezw@gmail.com
- Phone: +263 71 089 6129
