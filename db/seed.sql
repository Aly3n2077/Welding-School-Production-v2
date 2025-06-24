-- Clear existing data (optional, be careful in production)
DELETE FROM "PasswordResetToken";
DELETE FROM "EmailVerificationToken";
DELETE FROM "AuditLog";
DELETE FROM "UserProfile";
DELETE FROM "Enrollment";
DELETE FROM "Payment";
DELETE FROM "Announcement";
DELETE FROM "Course";
DELETE FROM "User";

-- Seed Users
-- Ensure passwords are securely hashed in a real application.
-- For this mock setup, we'll use pre-hashed passwords.
-- Hashed password for "admin123!" (use bcrypt to generate this)
-- Example: await hash("admin123!", 12) -> $2a$12$yourhashedpasswordhere
-- For the purpose of this seed, I'll use a placeholder. Replace with actual hash.
-- IMPORTANT: Generate actual bcrypt hashes for these passwords.
-- Password: admin123!
INSERT INTO "User" (id, email, name, password, "role", "emailVerified", "createdAt", "updatedAt", "failedLoginAttempts", "isActive") VALUES
('user-admin-001', 'mroncyweldingschoolzw@gmail.com', 'Daniel Muronzi (Admin)', '$2a$12$YJ.gqY09G.CMf2zL9Qk1V.7YtCGXkXfXMjYSkrBPmXpXl3LzQ2/aK', 'ADMIN', NOW(), NOW(), NOW(), 0, TRUE),
('user-student-001', 'student@example.com', 'Test Student', '$2a$12$YJ.gqY09G.CMf2zL9Qk1V.7YtCGXkXfXMjYSkrBPmXpXl3LzQ2/aK', 'STUDENT', NOW(), NOW(), NOW(), 0, TRUE),
('user-instructor-001', 'instructor@example.com', 'Test Instructor', '$2a$12$YJ.gqY09G.CMf2zL9Qk1V.7YtCGXkXfXMjYSkrBPmXpXl3LzQ2/aK', 'INSTRUCTOR', NOW(), NOW(), NOW(), 0, TRUE);

-- Seed User Profiles
INSERT INTO "UserProfile" (id, "userId", "firstName", "lastName", phone, "dateOfBirth", address, city, country, bio, avatar, preferences, "createdAt", "updatedAt") VALUES
('profile-admin-001', 'user-admin-001', 'Daniel', 'Muronzi', '+263777123456', '1980-01-01', '123 Welding Rd', 'Harare', 'Zimbabwe', 'Founder and Lead Instructor at Mroncy School of Welding.', '/images/daniel/daniel-muronzi-profile-cap.jpg', '{"theme": "light", "language": "en", "notifications": {"email": true, "push": true, "sms": false}, "privacy": {"profileVisible": true, "showEmail": true, "showPhone": true}}', NOW(), NOW()),
('profile-student-001', 'user-student-001', 'Test', 'Student', '+263777654321', '1995-05-15', '456 Student Ave', 'Harare', 'Zimbabwe', 'Eager to learn welding.', NULL, '{"theme": "light", "language": "en", "notifications": {"email": true, "push": false, "sms": false}, "privacy": {"profileVisible": true, "showEmail": false, "showPhone": false}}', NOW(), NOW());

-- Seed Courses
INSERT INTO "Course" (id, title, description, "instructorId", price, duration, "startDate", "endDate", "createdAt", "updatedAt", "category", "level", "imageUrl", "status") VALUES
('course-smaw-001', 'SMAW Basic Welding', 'Learn the fundamentals of Shielded Metal Arc Welding.', 'user-instructor-001', 199.99, '4 weeks', '2025-07-01', '2025-07-31', NOW(), NOW(), 'ARC_WELDING', 'BEGINNER', '/images/courses/smaw-welding.jpeg', 'PUBLISHED'),
('course-tig-001', 'TIG Advanced Techniques', 'Master Tungsten Inert Gas welding for precision work.', 'user-instructor-001', 299.99, '6 weeks', '2025-08-01', '2025-09-15', NOW(), NOW(), 'TIG_WELDING', 'ADVANCED', '/images/courses/tig-welding-closeup.jpeg', 'PUBLISHED');

-- Seed Enrollments
INSERT INTO "Enrollment" (id, "userId", "courseId", "enrolledAt", status, "progress", "completedAt", "createdAt", "updatedAt") VALUES
('enroll-001', 'user-student-001', 'course-smaw-001', NOW(), 'ACTIVE', 25, NULL, NOW(), NOW());

-- Seed Payments
INSERT INTO "Payment" (id, "userId", "courseId", "enrollmentId", amount, "paymentDate", "paymentMethod", status, "transactionId", "createdAt", "updatedAt") VALUES
('payment-001', 'user-student-001', 'course-smaw-001', 'enroll-001', 199.99, NOW(), 'ECOCASH', 'COMPLETED', 'TRANS_ECO_12345', NOW(), NOW());

-- Seed Announcements
INSERT INTO "Announcement" (id, title, content, "courseId", "userId", "createdAt", "updatedAt", "type", "audience") VALUES
('announce-global-001', 'Welcome to Mroncy School of Welding!', 'We are excited to have you. Check out our new courses.', NULL, 'user-admin-001', NOW(), NOW(), 'GENERAL', 'ALL_USERS'),
('announce-smaw-001', 'SMAW Course Update', 'New safety guidelines have been posted for the SMAW course.', 'course-smaw-001', 'user-instructor-001', NOW(), NOW(), 'COURSE_SPECIFIC', 'ENROLLED_STUDENTS');

-- Seed Audit Logs (Example)
INSERT INTO "AuditLog" (id, "userId", action, details, "ipAddress", "userAgent", "createdAt") VALUES
('audit-001', 'user-admin-001', 'SIGN_IN', '{"provider": "credentials"}', '192.168.1.100', 'Mozilla/5.0 ...', NOW());

-- Seed EmailVerificationToken (Example - usually generated on demand)
-- INSERT INTO "EmailVerificationToken" (id, email, token, expires, "createdAt") VALUES
-- ('evt-001', 'student@example.com', 'randomtoken123', NOW() + INTERVAL '1 day', NOW());

-- Seed PasswordResetToken (Example - usually generated on demand)
-- INSERT INTO "PasswordResetToken" (id, email, token, expires, used, "createdAt") VALUES
-- ('prt-001', 'student@example.com', 'randomresettoken456', NOW() + INTERVAL '1 hour', FALSE, NOW());


SELECT 'Database seeding completed successfully.' AS message;
