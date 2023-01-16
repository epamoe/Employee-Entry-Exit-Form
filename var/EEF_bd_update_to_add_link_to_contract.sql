ALTER TABLE `entry_exit_form` ADD `link_to_contract` TEXT NULL DEFAULT NULL AFTER `contract_type`;
UPDATE `Enko_groups` SET `important` = b'0' WHERE `Enko_groups`.`mail` = 'botho@enkoeducation.com';
