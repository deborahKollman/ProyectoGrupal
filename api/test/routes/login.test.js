const request = require('supertest');
const server = require('../../server');
const { User, Op, connection } = require('../../src/database/postgres');
const { OK, CREATED } = require('../../src/routes/helpers/status');
