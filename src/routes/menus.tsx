import { MantineColor } from "@mantine/core";
import { Bed, Bell, Calendar, CircleWavyQuestion, CreditCard, Envelope, HouseSimple, MegaphoneSimple, User } from "phosphor-react";

export const staffMenu = [
    { "name": "Beranda", "path": "/staff/", "icon": <HouseSimple /> },
    { "name": "Kelola Kamar", "path": "/staff/room-assignment", "icon": <Bed /> },
    { "name": "Pembayaran", "path": "/staff/payments", "icon": <CreditCard /> },
    { "name": "Acara", "path": "/staff/events", "icon": <Calendar /> },
    { "name": "Broadcast", "path": "/staff/schedule", "icon": <MegaphoneSimple /> },
];

export const parentMenu = [
    { "name": "Beranda", "path": "/parent/", "icon": <HouseSimple /> },
    { "name": "Anak Saya", "path": "/parent/my-student", "icon": <User /> },
    { "name": "Pembayaran", "path": "/parent/payments", "icon": <CreditCard /> },
];

export const studentMenu = [
    { "name": "Beranda", "path": "/student/", "icon": <HouseSimple /> },
    { "name": "Kamar Saya", "path": "/student/my-room", "icon": <Bed /> },
    { "name": "Pembayaran", "path": "/student/payments", "icon": <CreditCard /> },
    { "name": "Acara", "path": "/student/schedule", "icon": <Calendar /> },
];

export const staffSecondaryMenu = [
    { "name": "Notifikasi", "path": "/staff/notifications", "icon": <Bell /> },
    { "name": "Bantuan", "path": "/staff/help", "icon": <CircleWavyQuestion /> },
];

export const parentSecondaryMenu = [
    { "name": "Notifikasi", "path": "/parent/notifications", "icon": <Bell /> },
    { "name": "Bantuan", "path": "/parent/help", "icon": <CircleWavyQuestion /> },
];

export const studentSecondaryMenu = [
    { "name": "Notifikasi", "path": "/student/notifications", "icon": <Bell /> },
    { "name": "Bantuan", "path": "/student/help", "icon": <CircleWavyQuestion /> },
];

export const UrlToColor: Record<string, MantineColor> = {
    student: 'blue',
    parent: 'grape',
    staff: 'green',
    login: 'gray',
};
export const UrlToName: Record<string, string> = {
    student: 'Siswa',
    parent: 'Orang Tua',
    staff: 'Staff',
    login: 'Login',
    register: 'Register',
    "forgot-password": 'Forgot Password',
    "reset-password": 'Reset Password',

    home: 'Beranda',
    "room-assignment": 'Penempatan Kamar',
    payments: 'Pembayaran',
    events: 'Acara',
    schedule: 'Broadcast',
    notifications: 'Notifikasi',
    help: 'Bantuan',
    "my-student": 'Siswa Saya',
    "my-room": 'Kamar Saya',
};