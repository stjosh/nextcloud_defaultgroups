<?php

/**
 * @copyright Copyright (c) 2020
 *
 * @author Josua Hunziker <der@digitalwerker.ch>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


namespace OCA\AutoGroups\Tests\Integration;

use Test\TestCase;
use OCA\AutoGroups\AppInfo\Application;

class IntegrationTest extends TestCase
{
    private $app;
    private $container;

    private $userManager;
    private $groupManager;
    private $config;

    protected function setUp(): void
    {
        parent::setUp();

        $this->app = new Application();
        $this->app->registerListeners();

        $this->container = $this->app->getContainer();
        $this->groupManager = $this->container->query('OCP\IGroupManager');
        $this->userManager = $this->container->query('OCP\IUserManager');
        $this->config = $this->container->query('OCP\IConfig');
    }

    public function testAddedToAutoGroupOnCreate()
    {
        $this->config->setAppValue("AutoGroups", "auto_groups", '["autogroup"]');

        $this->userManager->createUser('testuser', 'testPassword');
        $testUser = $this->userManager->get('testuser');

        $groups = $this->groupManager->getUserGroups($testUser);
        $this->assertContains('autogroup', $groups);
    }
}